// Utility for form validation
// Usage: validate(formData, rules)
// rules: { field: { required: true, pattern: /.../, minLength: n, maxLength: n, custom: fn } }

const injectionPattern = /(<script.*?>.*?<\/script.*?>)|(;|--|\b(select|update|delete|insert|drop|alter|create|truncate|exec|union|sleep)\b)/i;

export function validate(formData, rules) {
  const errors = {};
  Object.entries(rules).forEach(([field, rule]) => {
    const value = formData[field];
    if (rule.required && (!value || (typeof value === 'string' && !value.trim()))) {
      errors[field] = rule.message || 'This field is required';
      return;
    }
    if (rule.pattern && value && !rule.pattern.test(value)) {
      errors[field] = rule.message || 'Invalid format';
      return;
    }
    if (rule.minLength && value && value.length < rule.minLength) {
      errors[field] = rule.message || `Minimum ${rule.minLength} characters`;
      return;
    }
    if (rule.maxLength && value && value.length > rule.maxLength) {
      errors[field] = rule.message || `Maximum ${rule.maxLength} characters`;
      return;
    }
    if (value && injectionPattern.test(value)) {
      errors[field] = 'Invalid input detected';
      return;
    }
    if (rule.custom && typeof rule.custom === 'function') {
      const customError = rule.custom(value, formData);
      if (customError) {
        errors[field] = customError;
        return;
      }
    }
  });
  return errors;
}
