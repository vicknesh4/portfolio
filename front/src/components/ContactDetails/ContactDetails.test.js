import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactDetails from './ContactDetails';
import emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser');

describe('ContactDetails Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders contact form and contact info', () => {
    render(<ContactDetails />);
    
    expect(screen.getByText('Contactez-moi')).toBeInTheDocument();
    expect(screen.getByText('Téléphone')).toBeInTheDocument();
    expect(screen.getByText('Adresse')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Votre nom')).toBeInTheDocument();
    expect(screen.getByLabelText('Votre email')).toBeInTheDocument();
    expect(screen.getByLabelText('Votre message')).toBeInTheDocument();
    expect(screen.getByText('Envoyer le message')).toBeInTheDocument();
  });

  test('submits form and displays success message', async () => {
    emailjs.sendForm.mockResolvedValue({ text: 'success' });
    render(<ContactDetails />);

    fireEvent.change(screen.getByLabelText('Votre nom'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Votre email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Votre message'), { target: { value: 'Test message' } });

    fireEvent.click(screen.getByText('Envoyer le message'));

    await waitFor(() => {
      expect(screen.getByTestId('status-message')).toHaveTextContent("Message envoyé ! Je vous répondrai bientôt.");
    });

    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
  });

  test('shows error message when form submission fails', async () => {
    emailjs.sendForm.mockRejectedValue(new Error('Failed to send email'));
    render(<ContactDetails />);

    fireEvent.change(screen.getByLabelText('Votre nom'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Votre email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Votre message'), { target: { value: 'Test message' } });

    fireEvent.click(screen.getByText('Envoyer le message'));

    await waitFor(() => {
      expect(screen.getByTestId('status-message')).toHaveTextContent("Une erreur s'est produite. Veuillez réessayer plus tard.");
    });
  });
});