import { useState } from "react";

interface Trainer {
  name: string;
  specialty: string;
  bio: string;
  image: string;
  credentials: string[];
}

interface TrainerCardProps {
  trainer: Trainer;
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="trainer-card relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-black aspect-[3/4]">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Magazine-style accent */}
        <div className="absolute top-4 right-4 w-12 h-12 border-2 border-gold">
          <div className="absolute inset-1 border border-gold"></div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          {/* Title and specialty */}
          <div className="mb-4">
            <h3 className="text-2xl font-serif font-bold text-white mb-1">
              {trainer.name}
            </h3>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest">
              {trainer.specialty}
            </p>
          </div>

          {/* Bio - reveals on hover */}
          <p
            className={`text-sm text-gray-200 leading-relaxed mb-4 transition-all duration-500 ${
              isHovered ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            {trainer.bio}
          </p>

          {/* Credentials */}
          <div
            className={`flex flex-wrap gap-2 transition-all duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {trainer.credentials.map((credential, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 border border-platinum/50 text-platinum"
              >
                {credential}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
    </div>
  );
}
