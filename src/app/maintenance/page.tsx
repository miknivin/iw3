import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Under Maintenance | iW3',
    description: 'We are currently performing scheduled maintenance. We will be back shortly.',
};

export default function MaintenancePage() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Under Maintenance | iW3</title>
                <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0a0e1a;
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .maintenance-bg {
            position: fixed;
            inset: 0;
            background: radial-gradient(ellipse at 30% 30%, rgba(0, 100, 200, 0.15) 0%, transparent 60%),
                        radial-gradient(ellipse at 70% 70%, rgba(255, 140, 0, 0.1) 0%, transparent 60%),
                        #0a0e1a;
            z-index: 0;
          }

          .maintenance-container {
            position: relative;
            z-index: 1;
            text-align: center;
            padding: 40px 20px;
            max-width: 600px;
            width: 100%;
          }

          .logo-area {
            margin-bottom: 40px;
          }

          .logo-text {
            font-size: 2.5rem;
            font-weight: 800;
            letter-spacing: 4px;
            color: #ffffff;
            text-transform: uppercase;
          }

          .logo-text span {
            color: #ff8c00;
          }

          .gear-icon {
            margin: 30px auto;
            width: 100px;
            height: 100px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .gear-icon svg {
            animation: spin 6s linear infinite;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .progress-bar-wrapper {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin: 30px 0;
          }

          .progress-bar {
            height: 100%;
            width: 60%;
            background: linear-gradient(90deg, #ff8c00, #ffd700);
            border-radius: 2px;
            animation: progressPulse 2s ease-in-out infinite alternate;
          }

          @keyframes progressPulse {
            0% { width: 30%; opacity: 0.7; }
            100% { width: 75%; opacity: 1; }
          }

          h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 16px;
            color: #ffffff;
          }

          p {
            font-size: 1.05rem;
            color: rgba(255, 255, 255, 0.65);
            line-height: 1.7;
            margin-bottom: 12px;
          }

          .badge {
            display: inline-block;
            background: rgba(255, 140, 0, 0.15);
            border: 1px solid rgba(255, 140, 0, 0.4);
            color: #ff8c00;
            padding: 6px 18px;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 24px;
          }

          .divider {
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #ff8c00, #ffd700);
            border-radius: 2px;
            margin: 24px auto;
          }

          .contact-text {
            margin-top: 30px;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.4);
          }

          .contact-text a {
            color: #ff8c00;
            text-decoration: none;
          }

          .contact-text a:hover {
            text-decoration: underline;
          }

          .dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 20px;
          }

          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            animation: dotBounce 1.4s ease-in-out infinite;
          }

          .dot:nth-child(1) { animation-delay: 0s; }
          .dot:nth-child(2) { animation-delay: 0.2s; }
          .dot:nth-child(3) { animation-delay: 0.4s; }

          @keyframes dotBounce {
            0%, 80%, 100% { background: rgba(255, 255, 255, 0.2); transform: scale(1); }
            40% { background: #ff8c00; transform: scale(1.3); }
          }
        `}</style>
            </head>
            <body>
                <div className="maintenance-bg" />
                <div className="maintenance-container">
                    <div className="logo-area">
                        <div className="logo-text">i<span>W</span>3</div>
                    </div>

                    <div className="badge">⚙ Scheduled Maintenance</div>

                    <div className="gear-icon">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M40 25a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 24a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"
                                fill="#ff8c00"
                                opacity="0.9"
                            />
                            <path
                                d="M72.2 44.8l-6.4-1.1a26.5 26.5 0 0 0-1.6-5.3l4-5.1a2 2 0 0 0-.2-2.6l-4.7-4.7a2 2 0 0 0-2.6-.2l-5.1 4a26.5 26.5 0 0 0-5.3-1.6L49.2 22a2 2 0 0 0-2-1.7h-6.6a2 2 0 0 0-2 1.7l-1.1 6.3a26.5 26.5 0 0 0-5.3 1.6l-5.1-4a2 2 0 0 0-2.6.2l-4.7 4.7a2 2 0 0 0-.2 2.6l4 5.1a26.5 26.5 0 0 0-1.6 5.3l-6.3 1.1A2 2 0 0 0 14 47v6.6a2 2 0 0 0 1.7 2l6.4 1.1a26.5 26.5 0 0 0 1.6 5.3l-4 5.1a2 2 0 0 0 .2 2.6l4.7 4.7a2 2 0 0 0 2.6.2l5.1-4a26.5 26.5 0 0 0 5.3 1.6l1.1 6.4a2 2 0 0 0 2 1.7h6.6a2 2 0 0 0 2-1.7l1.1-6.4a26.5 26.5 0 0 0 5.3-1.6l5.1 4a2 2 0 0 0 2.6-.2l4.7-4.7a2 2 0 0 0 .2-2.6l-4-5.1a26.5 26.5 0 0 0 1.6-5.3l6.4-1.1A2 2 0 0 0 74 53.5V47a2 2 0 0 0-1.8-2.2z"
                                fill="#ff8c00"
                                opacity="0.3"
                            />
                        </svg>
                    </div>

                    <h1>We&apos;ll Be Back Soon!</h1>

                    <div className="divider" />

                    <p>
                        Our website is currently undergoing scheduled maintenance to bring you a better experience.
                        We apologize for any inconvenience.
                    </p>

                    <div className="progress-bar-wrapper">
                        <div className="progress-bar" />
                    </div>

                    <div className="dots">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                    </div>

                    <p className="contact-text">
                        For urgent inquiries, contact us at{' '}
                        <a href="mailto:info@iw3.com">info@iw3.com</a>
                    </p>
                </div>
            </body>
        </html>
    );
}
