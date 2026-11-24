import React, { useState } from 'react';

const COMPANY_LOGO_URL =
  'https://res.cloudinary.com/ypvr42cl/image/upload/v1795351102/5f50c463-646b-4b79-aa17-6443744ac469.png';

interface CrestProps {
  variant?: 'nav' | 'hero';
  className?: string;
}

export const SevenproCrest: React.FC<CrestProps> = ({
  variant = 'hero',
  className = '',
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (!imgFailed) {
    return (
      <img
        src={COMPANY_LOGO_URL}
        alt="Sevenpro Entertainment Logo"
        referrerPolicy="no-referrer"
        onError={() => setImgFailed(true)}
        className={`object-contain select-none ${className}`}
      />
    );
  }

  if (variant === 'nav') {
    return (
      <svg
        viewBox="0 0 64 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sevenproGoldNav" x1="0" y1="0" x2="64" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F6DF8F" />
            <stop offset="45%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8E681B" />
          </linearGradient>
        </defs>
        <polygon
          points="14,4 50,4 61,18 32,52 3,18"
          stroke="url(#sevenproGoldNav)"
          strokeWidth="3.5"
          fill="#0B0B0D"
        />
        <polygon
          points="17,8 47,8 55,18 32,46 9,18"
          fill="url(#sevenproGoldNav)"
          fillOpacity="0.16"
        />
        <path
          d="M22 15H42L38 22H26L39 30L35 38H21L24 32H34L22 24V15Z"
          fill="url(#sevenproGoldNav)"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 220 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Sevenpro Entertainment Crest"
    >
      <defs>
        <linearGradient id="goldOuter" x1="20" y1="8" x2="200" y2="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCE79C" />
          <stop offset="42%" stopColor="#D4AF37" />
          <stop offset="78%" stopColor="#B88924" />
          <stop offset="100%" stopColor="#7C5914" />
        </linearGradient>
        <linearGradient id="goldDark" x1="110" y1="15" x2="110" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A210D" />
          <stop offset="100%" stopColor="#090806" />
        </linearGradient>
        <linearGradient id="goldS" x1="75" y1="20" x2="145" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF0B8" />
          <stop offset="50%" stopColor="#D6AD38" />
          <stop offset="100%" stopColor="#9A711C" />
        </linearGradient>
      </defs>
      <polygon points="42,10 178,10 212,48 110,156 8,48" fill="url(#goldOuter)" />
      <polygon points="46,16 174,16 203,48 110,147 17,48" fill="url(#goldDark)" />
      <path
        d="M72 24H148L138 42H88L142 74L130 120H72L82 100H118L124 82L70 50L72 24Z"
        fill="url(#goldS)"
      />
      <rect x="26" y="61" width="168" height="36" rx="2" fill="#08080A" fillOpacity="0.92" />
      <line x1="26" y1="61" x2="194" y2="61" stroke="url(#goldOuter)" strokeWidth="1.4" />
      <line x1="26" y1="97" x2="194" y2="97" stroke="url(#goldOuter)" strokeWidth="1.4" />
      <text
        x="110"
        y="79"
        textAnchor="middle"
        fill="url(#goldOuter)"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
        fontSize="18"
        letterSpacing="2.5"
      >
        SEVENPRO
      </text>
      <text
        x="110"
        y="92"
        textAnchor="middle"
        fill="#E5C975"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="500"
        fontSize="10"
        letterSpacing="1.6"
      >
        Entertainment
      </text>
    </svg>
  );
};
