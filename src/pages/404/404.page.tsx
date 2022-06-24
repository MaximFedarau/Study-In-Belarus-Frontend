//Types
import { ReactElement } from 'react';

//MUI
import { Typography } from '@mui/material';

export default function Page404(): ReactElement {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#0000a3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '64px',
        }}
      >
        <div
          style={{
            background: '#999999',
            padding: '1px 12px 1px 12px',
          }}
        >
          <Typography
            style={{
              color: '#0000a3',
              fontFamily: 'Windows Regular',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Study in Belarus
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '23px' }}>
          <Typography
            style={{
              color: 'white',
              fontFamily: 'Windows Regular',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            A 404 error has occurred. To continue:
          </Typography>
          <Typography
            style={{
              color: 'white',
              fontFamily: 'Windows Regular',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Reload current page, or
          </Typography>
          <Typography
            style={{
              color: 'white',
              fontFamily: 'Windows Regular',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Navigate to the home page. Also check your internet connection and
            reload current page.
          </Typography>
          <Typography
            style={{
              color: 'white',
              fontFamily: 'Windows Regular',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            {`© ${new Date().getFullYear()} Study in Belarus. All rights reserved.`}
          </Typography>
        </div>
      </div>
    </div>
  );
}
