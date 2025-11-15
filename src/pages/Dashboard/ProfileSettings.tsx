import React from 'react';
import { User } from 'lucide-react';
import { PlaceholderPage } from './PlaceholderPage';

export const ProfileSettings: React.FC = () => {
  return (
    <PlaceholderPage
      title="Profile Settings"
      subtitle="Manage your personal information and preferences"
      icon={<User size={64} />}
      message="Profile Settings"
    />
  );
};
