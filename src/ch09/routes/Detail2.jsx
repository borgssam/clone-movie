import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Detail2() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Location state:", location.state);
    if (!location.state) {
      navigate('/');
    }
  }, [location, navigate]);

  if (!location.state) {
    return <p>Loading...</p>; // 상태가 없을 때 로딩 메시지를 표시
  }

  const { year, title, summary, poster, genres } = location.state;

  return (
    <div className="detail">
      <img src={poster} alt={title} />
      <h2>{title} ({year})</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
