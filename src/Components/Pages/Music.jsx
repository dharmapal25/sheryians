import React from 'react'
import "./Music.css"
const Music = () => {

    // new

    return (
        <>
            <div className='music-div'>


                <iframe
                    className='musics'
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1E4AnYVmEEo8ws?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">

                </iframe>

                <iframe
                    className='musics'
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdKTcyXUUm1i?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>

                <iframe
                    className='musics'
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9L0PulSSl2E?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>

                <iframe
                    className='musics'
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVylAeNMeLc5?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
        </>
    )
}

export default Music