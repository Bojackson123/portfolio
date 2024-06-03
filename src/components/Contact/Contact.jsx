import { useState, forwardRef } from 'react';
import styles from './Contact.module.css';

const Contact = forwardRef((props, ref) =>{
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:contactme@rashidalmarri.dev?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
        
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.target = '_blank';
        link.click();

        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className={styles.contactContainer} ref={ref}>
            <form className={styles.contact} onSubmit={handleSubmit}>
                <div className={styles.header}>
                    <h1>Contact Me</h1>
                    <p>Feel free to contact me for any questions or opportunities.</p>
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.nameInput}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.phoneInput}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.emailInput}
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.messageInput}
                />
                <input
                    type="submit"
                    value="Submit"
                    className={styles.submitButton}
                />
            </form>
        </div>
    );
});

Contact.displayName = 'Contact';

export default Contact;
