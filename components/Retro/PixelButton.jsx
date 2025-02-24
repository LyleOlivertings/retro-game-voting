export const PixelButton = ({ children, onClick }) => {
    return (
      <button 
        onClick={onClick}
        className="retro-button"
        style={{
          padding: '8px 16px',
          background: '#00ff00',
          border: '3px solid black',
          fontFamily: "'Press Start 2P', cursive",
          cursor: 'pointer',
          textTransform: 'uppercase',
          color: 'black',
        }}
      >
        {children}
      </button>
    )
  }