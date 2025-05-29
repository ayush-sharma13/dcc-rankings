import dccLogo from '../assets/DCC-logo.png'; // use the correct filename

export default function Header() {
    return (
        <>
            <header style={{
                display: 'flex',
                flexDirection: 'row', // Align items horizontally
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px',
                backgroundColor: '#282c34',
                color: 'white'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src={dccLogo}
                        alt="DCC Logo" 
                        style={{ height: '40px', marginRight: '15px' }} 
                    />
                    <div>
                        <h1 style={{ margin: '0', fontSize: '20px', textAlign: 'center' }}>Domestic Cricket Council</h1>
                    </div>
                </div>
            </header>
            <div style={{
                textAlign: 'center',
                padding: '10px',
                backgroundColor: '#61dafb',
                color: '#282c34',
                fontWeight: 'bold',
                fontSize: '18px'
            }}>
                DCC World Rankings 
            </div>
        </>
    );
}