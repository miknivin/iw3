"use client";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  timestamp: string;
}

const AdminContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/admin/contacts');
      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast.error('Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const response = await fetch(`/api/admin/contacts?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setContacts(contacts.filter(contact => contact.id !== id));
        toast.success('Contact deleted successfully');
        setSelectedContact(null);
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast.error('Failed to delete contact');
    }
  };

  if (loading) {
    return (
      <div className="admin-container">
        <div className="loading">Loading contacts...</div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <style jsx>{`
        .admin-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #007bff;
        }
        
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .stat-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          border: 1px solid #dee2e6;
        }
        
        .contacts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          height: 600px;
        }
        
        .contacts-list {
          border: 1px solid #dee2e6;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .list-header {
          background: #007bff;
          color: white;
          padding: 15px;
          font-weight: bold;
        }
        
        .contact-item {
          padding: 15px;
          border-bottom: 1px solid #dee2e6;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .contact-item:hover {
          background-color: #f8f9fa;
        }
        
        .contact-item.selected {
          background-color: #e3f2fd;
        }
        
        .contact-preview {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .contact-info h4 {
          margin: 0 0 5px 0;
          color: #007bff;
        }
        
        .contact-info p {
          margin: 0;
          color: #6c757d;
          font-size: 14px;
        }
        
        .contact-date {
          font-size: 12px;
          color: #adb5bd;
        }
        
        .contact-detail {
          border: 1px solid #dee2e6;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .detail-header {
          background: #28a745;
          color: white;
          padding: 15px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .detail-content {
          padding: 20px;
          max-height: 500px;
          overflow-y: auto;
        }
        
        .detail-field {
          margin-bottom: 15px;
        }
        
        .detail-field label {
          font-weight: bold;
          color: #495057;
          display: block;
          margin-bottom: 5px;
        }
        
        .detail-field .value {
          background: #f8f9fa;
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #dee2e6;
        }
        
        .message-field .value {
          min-height: 100px;
          white-space: pre-wrap;
        }
        
        .btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .btn-danger {
          background: #dc3545;
          color: white;
        }
        
        .btn-danger:hover {
          background: #c82333;
        }
        
        .empty-state {
          text-align: center;
          color: #6c757d;
          padding: 40px;
        }
        
        .loading {
          text-align: center;
          padding: 40px;
          font-size: 18px;
        }
        
        @media (max-width: 768px) {
          .contacts-grid {
            grid-template-columns: 1fr;
            height: auto;
          }
          
          .stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="header">
        <h1>Contact Messages Admin</h1>
        <p>Manage and view contact form submissions</p>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>{contacts.length}</h3>
          <p>Total Messages</p>
        </div>
        <div className="stat-card">
          <h3>{contacts.filter(c => new Date(c.timestamp) > new Date(Date.now() - 24*60*60*1000)).length}</h3>
          <p>Last 24 Hours</p>
        </div>
        <div className="stat-card">
          <h3>{contacts.filter(c => new Date(c.timestamp) > new Date(Date.now() - 7*24*60*60*1000)).length}</h3>
          <p>This Week</p>
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className="empty-state">
          <h3>No contacts yet</h3>
          <p>Contact messages will appear here when users submit the contact form.</p>
        </div>
      ) : (
        <div className="contacts-grid">
          <div className="contacts-list">
            <div className="list-header">
              Contact Messages ({contacts.length})
            </div>
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`contact-item ${selectedContact?.id === contact.id ? 'selected' : ''}`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="contact-preview">
                    <div className="contact-info">
                      <h4>{contact.name}</h4>
                      <p>{contact.email}</p>
                      <p>{contact.subject || 'No Subject'}</p>
                    </div>
                    <div className="contact-date">
                      {new Date(contact.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-detail">
            {selectedContact ? (
              <>
                <div className="detail-header">
                  <span>Contact Details</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteContact(selectedContact.id)}
                  >
                    Delete
                  </button>
                </div>
                <div className="detail-content">
                  <div className="detail-field">
                    <label>Name:</label>
                    <div className="value">{selectedContact.name}</div>
                  </div>
                  
                  <div className="detail-field">
                    <label>Email:</label>
                    <div className="value">
                      <a href={`mailto:${selectedContact.email}`}>
                        {selectedContact.email}
                      </a>
                    </div>
                  </div>
                  
                  {selectedContact.phone && (
                    <div className="detail-field">
                      <label>Phone:</label>
                      <div className="value">
                        <a href={`tel:${selectedContact.phone}`}>
                          {selectedContact.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  <div className="detail-field">
                    <label>Subject:</label>
                    <div className="value">{selectedContact.subject || 'No Subject'}</div>
                  </div>
                  
                  <div className="detail-field message-field">
                    <label>Message:</label>
                    <div className="value">{selectedContact.message}</div>
                  </div>
                  
                  <div className="detail-field">
                    <label>Submitted:</label>
                    <div className="value">
                      {new Date(selectedContact.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="detail-header">
                <span>Select a contact to view details</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
