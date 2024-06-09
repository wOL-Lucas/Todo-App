import { User } from '@types/User';

export type LoginStatus = {
  success: boolean;
  message?: string;
  token?: string;
};

type LoginResponse = {
  token?: string,
  message?: string;
}

export const login = async (user: User): Promise<LoginStatus> => {
  const status: LoginStatus = { success: false };

  try {
    const response = await fetch('http://127.0.0.1:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      
      const data = await response.json() as LoginResponse;  

      status.success = true;
      status.message = 'Login successful';
      status.token = data.token!;

    } else {
      const errorData = await response.json();
      console.error('Error response:', errorData);
      status.message = errorData.message;
    }
  } catch (error) {
    console.error('Network error:', error);
    status.message = 'Network error';
  }

  return status;
};


export default login;
