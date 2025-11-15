import React from 'react';
import { ClipboardCheck } from 'lucide-react';
import { PlaceholderPage } from './PlaceholderPage';

export const PreCheckIn: React.FC = () => {
  return (
    <PlaceholderPage
      title="Pre-Check-In"
      subtitle="Complete your pre-check-in for upcoming stays"
      icon={<ClipboardCheck size={64} />}
      message="Pre-Check-In"
    />
  );
};
