import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Ticket,
  Hash,
  Mail,
  AlertCircle,
  Loader,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Info,
  Shield
} from 'lucide-react';
import styles from './BookingAccess.module.css';

export const BookingAccess: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bookingReference: '',
    email: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Auto-format booking reference
    if (name === 'bookingReference') {
      processedValue = value.toUpperCase().replace(/[^A-Z0-9-]/g, '');
    }

    // Auto-format email
    if (name === 'email') {
      processedValue = value.toLowerCase();
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const validateField = (field: string) => {
    const newErrors: { [key: string]: string } = { ...errors };

    if (field === 'bookingReference') {
      if (!formData.bookingReference) {
        newErrors.bookingReference = 'Booking reference is required';
      } else if (formData.bookingReference.length < 8) {
        newErrors.bookingReference = 'Please enter a valid booking reference';
      } else {
        delete newErrors.bookingReference;
      }
    }

    if (field === 'email') {
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        delete newErrors.email;
      }
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.bookingReference) {
      newErrors.bookingReference = 'Booking reference is required';
    } else if (formData.bookingReference.length < 8) {
      newErrors.bookingReference = 'Please enter a valid booking reference';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      bookingReference: true,
      email: true
    });

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Access booking:', formData);
      setIsLoading(false);
      // Navigate to booking detail page
      navigate(`/booking/${formData.bookingReference.toLowerCase()}`);
    }, 1500);
  };

  const isFieldValid = (field: string) => {
    return touched[field] && !errors[field] && formData[field as keyof typeof formData];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={styles.container}>
      {/* Left Side - Brand Showcase */}
      <motion.div
        className={styles.brandShowcase}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.brandContent}>
          <div className={styles.brandLogo}>GLIMMORA</div>

          <motion.h1
            className={styles.brandHeading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Access Your Reservation
          </motion.h1>

          <motion.p
            className={styles.brandDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Enter your booking details to view your reservation, complete pre-check-in, and access your digital room key.
          </motion.p>

          <motion.div
            className={styles.featureList}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className={styles.feature}>
              <CheckCircle size={24} className={styles.featureIcon} />
              <span className={styles.featureText}>View booking details and confirmation</span>
            </div>
            <div className={styles.feature}>
              <CheckCircle size={24} className={styles.featureIcon} />
              <span className={styles.featureText}>Complete pre-check-in online</span>
            </div>
            <div className={styles.feature}>
              <CheckCircle size={24} className={styles.featureIcon} />
              <span className={styles.featureText}>Receive digital room key</span>
            </div>
            <div className={styles.feature}>
              <CheckCircle size={24} className={styles.featureIcon} />
              <span className={styles.featureText}>Skip the front desk on arrival</span>
            </div>
          </motion.div>

          <div className={styles.brandFooter}>
            <Sparkles size={16} />
            <span>AI-Powered Hospitality</span>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Form Area */}
      <div className={styles.formArea}>
        <div className={styles.formAreaContent}>
          {/* Back Link */}
          <button
            className={styles.backLink}
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>

          {/* Mobile Logo */}
          <div className={styles.mobileLogo}>GLIMMORA</div>

          {/* Form Container */}
          <motion.div
            className={styles.formContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Page Badge */}
            <motion.div className={styles.pageBadge} variants={itemVariants}>
              <Ticket size={14} />
              <span>Booking Access</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 className={styles.heading} variants={itemVariants}>
              Access Your Booking
            </motion.h1>

            {/* Subheading */}
            <motion.p className={styles.subheading} variants={itemVariants}>
              Enter your booking information to continue
            </motion.p>

            {/* Form Section */}
            <motion.div className={styles.formSection} variants={itemVariants}>
              <form onSubmit={handleSubmit}>
                {/* Booking Reference Field */}
                <div className={styles.fieldContainer}>
                  <label className={styles.label}>
                    Booking Reference
                    <span className={styles.required}>*</span>
                  </label>

                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      name="bookingReference"
                      value={formData.bookingReference}
                      onChange={handleChange}
                      onBlur={() => handleBlur('bookingReference')}
                      placeholder="e.g., GLM-2024-12345"
                      className={`${styles.input} ${
                        errors.bookingReference && touched.bookingReference ? styles.inputError : ''
                      } ${
                        isFieldValid('bookingReference') ? styles.inputSuccess : ''
                      }`}
                    />
                    <div className={styles.inputIcon}>
                      {isFieldValid('bookingReference') ? (
                        <CheckCircle size={20} className={styles.successIcon} />
                      ) : (
                        <Hash size={20} />
                      )}
                    </div>
                  </div>

                  {!errors.bookingReference && !touched.bookingReference && (
                    <div className={styles.helperText}>
                      <Info size={14} />
                      <span>You can find this in your confirmation email</span>
                    </div>
                  )}

                  {errors.bookingReference && touched.bookingReference && (
                    <motion.div
                      className={styles.errorMessage}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <AlertCircle size={14} />
                      <span>{errors.bookingReference}</span>
                    </motion.div>
                  )}
                </div>

                {/* Email Field */}
                <div className={styles.fieldContainer}>
                  <label className={styles.label}>
                    Email Address
                    <span className={styles.required}>*</span>
                  </label>

                  <div className={styles.inputWrapper}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="your.email@example.com"
                      className={`${styles.input} ${
                        errors.email && touched.email ? styles.inputError : ''
                      } ${
                        isFieldValid('email') ? styles.inputSuccess : ''
                      }`}
                    />
                    <div className={styles.inputIcon}>
                      {isFieldValid('email') ? (
                        <CheckCircle size={20} className={styles.successIcon} />
                      ) : (
                        <Mail size={20} />
                      )}
                    </div>
                  </div>

                  {!errors.email && !touched.email && (
                    <div className={styles.helperText}>
                      <Info size={14} />
                      <span>Use the email address you booked with</span>
                    </div>
                  )}

                  {errors.email && touched.email && (
                    <motion.div
                      className={styles.errorMessage}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <AlertCircle size={14} />
                      <span>{errors.email}</span>
                    </motion.div>
                  )}
                </div>

                {/* Info Box */}
                <div className={styles.infoBox}>
                  <Info size={20} className={styles.infoIcon} />
                  <div className={styles.infoContent}>
                    <p className={styles.infoText}>
                      Don't have a booking yet? You can browse available rooms and make a reservation.
                    </p>
                    <button
                      type="button"
                      className={styles.infoLink}
                      onClick={() => navigate('/rooms')}
                    >
                      Book a Room →
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={styles.submitButton}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {isLoading ? (
                    <>
                      <Loader size={20} className={styles.spinner} />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <span>Access Booking</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Divider */}
              <div className={styles.divider} />

              {/* Alternative Actions */}
              <div className={styles.alternativeActions}>
                <p className={styles.alternativeText}>
                  Already have an account or need assistance?
                </p>
                <div className={styles.actionButtons}>
                  <button
                    className={styles.secondaryButton}
                    onClick={() => navigate('/signup')}
                  >
                    Create Account
                  </button>
                  <button
                    className={styles.secondaryButton}
                    onClick={() => navigate('/contact')}
                  >
                    Need Help?
                  </button>
                </div>
              </div>

              {/* Security Badge */}
              <div className={styles.securityBadge}>
                <Shield size={16} />
                <span>Your information is secure and encrypted</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
