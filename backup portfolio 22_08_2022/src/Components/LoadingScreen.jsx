import React from 'react';

export default function LoadingScreen({ loadingCountText }) {
    return (
        <div className="loading_screen_wrap" >
            <div className="loading">
                <div className="loading-content">
                    <div className="loading-text">
                        <span className="loading-text-words">L</span>
                        <span className="loading-text-words">O</span>
                        <span className="loading-text-words">A</span>
                        <span className="loading-text-words">D</span>
                        <span className="loading-text-words">I</span>
                        <span className="loading-text-words">N</span>
                        <span className="loading-text-words">G</span>
                        <span className="loading-text-words">.</span>
                        <span className="loading-text-words">.</span>
                        <span className="loading-text-words">.</span>
                    </div>
                    <p className="loadingText">{loadingCountText}%</p>
                </div>
            </div>
        </div >
    )
}
