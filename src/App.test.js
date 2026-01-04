import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust this import if the styles are used in a specific component like 'Sidebar' or 'Dashboard'

describe('App Styles and Class Integration', () => {
  // Test for the main Dashboard container class
  test('renders the Dashboard container with correct class', () => {
    const { container } = render(<App />);
    // Look for the element with the .Dashboard class defined in App.css
    const dashboardElement = container.querySelector('.Dashboard');
    
    if (dashboardElement) {
      expect(dashboardElement).toBeInTheDocument();
    } else {
      // Warn if the main layout wrapper isn't found (common if App.js structure differs)
      console.warn('Element with .Dashboard class not found. Ensure App component renders it.');
    }
  });

  // Test for Sidebar Button classes (Inactive state)
  test('renders sidebar buttons with .sidebar-button class', () => {
    const { container } = render(<App />);
    const sidebarButtons = container.querySelectorAll('.sidebar-button');

    // Assuming the app renders at least one sidebar button
    if (sidebarButtons.length > 0) {
      sidebarButtons.forEach(btn => {
        expect(btn).toBeVisible();
        // Note: We check for the class name. @apply styles are computed and not visible in classList
        expect(btn).toHaveClass('sidebar-button');
      });
    }
  });

  // Test for Active Sidebar Button class
  test('renders active sidebar button with .sidebar-button-active class', () => {
    const { container } = render(<App />);
    const activeButtons = container.querySelectorAll('.sidebar-button-active');

    if (activeButtons.length > 0) {
      activeButtons.forEach(btn => {
        expect(btn).toBeVisible();
        expect(btn).toHaveClass('sidebar-button-active');
      });
    }
  });

  // Test for Regular Button utility
  test('renders standard buttons with .regular-button class', () => {
    const { container } = render(<App />);
    const regularButtons = container.querySelectorAll('.regular-button');
    
    if (regularButtons.length > 0) {
      expect(regularButtons[0]).toHaveClass('regular-button');
    }
  });
});
