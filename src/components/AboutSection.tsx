import React, { useState } from 'react';
import { ArrowUpRight, Image as ImageIcon, User } from 'lucide-react';

const ABOUT_PORTRAIT_URL =
  'https://res.cloudinary.com/ypvr42cl/image/upload/v1795352118/e6ca4e9b-d844-4b4b-9d4c-7ead0d217660.png';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mangjuli',
    role: 'CEO',
    description: 'CEO and Creative Director of Sevenpro Entertainment.',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795353044/5efdfe98-e81f-45f2-b94a-29d6a2db0d4e.png',
  },
  {
    name: 'Angga Wijaya',
    role: 'Manager',
    description: 'Manager of Sevenpro Entertainment',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795353078/cf7a4bdf-55d4-4227-a1ca-48fc1e6cf5d8.png',
  },
  {
    name: 'Putri',
    role: 'Administration Manager',
    description: 'Administration of Sevenpro Entertainment',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795353093/6e55af63-da43-409b-ae29-09a27d472dad.png',
  },
  {
    name: 'Arik',
    role: 'Assistant Manager',
    description: 'Assistant Manager of Sevenpro Entertainment',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795353103/e65342bc-69ef-41dd-a38d-ff24f69d7aa9.png',
  },
  {
    name: 'Dipa',
    role: 'Costume Director',
    description: 'Costume Director & Event of Sevenpro Entertainment',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795353112/018f1d0d-9ea7-4604-bcf3-e18b471e8ad5.png',
  },
  {
    name: 'Dek Dunk',
    role: 'Art Director',
    description: 'Art Director Property of Sevenpro Entertainment',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795353116/d8e0e1af-6877-495c-8d97-8f5290e8b07f.png',
  },
];

interface AboutSectionProps {
  onServicesClick: () => void;
  onBookCooperation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onServicesClick,
  onBookCooperation,
}) => {
  const [imageError, setImageError] = useState(false);
  const [failedTeamImages, setFailedTeamImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="about"
      aria-label="About Sevenpro Entertainment"
      className="bg-[#070709] border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Agency Story & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
                About Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold leading-[1.15] tracking-tight text-white [text-wrap:balance]">
                Stage Craft, Talent & Event Production Since 2013
              </h2>

              <div className="mt-7 space-y-5 text-[15px] sm:text-base leading-[1.75] text-white/80 max-w-[64ch]">
                <p>
                  Sevenpro Entertainment is a company operating in the entertainment
                  services sector. Some of the service products that we sell include
                  dance products, bands, costumes, and other live entertainment show
                  products crafted to fill your special event.
                </p>
                <p>
                  Our company offers cooperation with various national companies and
                  government agencies based on our area of expertise, delivering
                  disciplined stage direction, curated talent, and dependable event
                  execution across Bali and Indonesia.
                </p>
              </div>
            </div>

            {/* Structured Agency Facts (Hairline Dividers, Zero Pills) */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <dt className="text-xs font-medium tracking-[0.14em] text-white/50 uppercase">
                    Established
                  </dt>
                  <dd className="mt-1.5 font-display tabular-nums text-lg font-medium text-white">
                    2013
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium tracking-[0.14em] text-white/50 uppercase">
                    Founder & Manager
                  </dt>
                  <dd className="mt-1.5 font-display text-lg font-medium text-white">
                    Ni Nyoman Komalasari
                  </dd>
                </div>

                <div className="sm:col-span-2">
                  <dt className="text-xs font-medium tracking-[0.14em] text-white/50 uppercase">
                    Offerings & Cooperation
                  </dt>
                  <dd className="mt-1.5 text-sm text-white/85">
                    Dance Products · Bands · Costumes · National Companies · Government Agencies
                  </dd>
                </div>

                <div className="sm:col-span-2">
                  <dt className="text-xs font-medium tracking-[0.14em] text-white/50 uppercase">
                    Studio Location
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-white/85">
                    Jalan Kuwum 2 Gang Kartika No. 26, Kerobokan, North Kuta, Badung, Bali
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onBookCooperation}
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>Discuss Cooperation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={onServicesClick}
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37]/60 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>Explore Services</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Large Vertical Feature Image Slot */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] aspect-[3/4] overflow-hidden border border-white/15 bg-[#0B0B0D]">
              {!imageError ? (
                <img
                  src={ABOUT_PORTRAIT_URL}
                  alt="Sevenpro Entertainment vertical performance showcase in Bali"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_rgba(11,11,13,0.98)_75%)] p-8 text-center">
                  <ImageIcon className="h-10 w-10 text-[#D4AF37]/60 mb-3" />
                  <p className="font-display text-base font-medium text-white/80">
                    Sevenpro Entertainment
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Kerobokan · North Kuta · Badung, Bali
                  </p>
                </div>
              )}

              {/* Subtle Bottom Gradient & Quiet Caption */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white/75">
                <span>Sevenpro Entertainment · Bali</span>
                <span className="font-mono tabular-nums text-[#E5C158]">Est. 2013</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Subsection */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase mb-2.5">
                Our Team
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white [text-wrap:balance]">
                Leadership & Creative Direction
              </h3>
            </div>
            <p className="text-sm text-white/60 max-w-md">
              The directors and managers coordinating choreography, costumes, stage properties, and live execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member) => {
              const hasFailed = Boolean(failedTeamImages[member.name]);
              return (
                <article
                  key={member.name}
                  className="group bg-[#0B0B0D] border border-white/10 hover:border-[#D4AF37]/45 transition-colors duration-200 flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111114] border-b border-white/10">
                    {!hasFailed ? (
                      <img
                        src={member.image}
                        alt={`${member.name} — ${member.role}`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedTeamImages((prev) => ({ ...prev, [member.name]: true }))
                        }
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_rgba(11,11,13,0.98)_75%)] p-6 text-center">
                        <User className="h-10 w-10 text-[#D4AF37]/60 mb-2" />
                        <span className="font-display text-base text-white/75">{member.name}</span>
                      </div>
                    )}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs font-medium tracking-[0.16em] text-[#D4AF37] uppercase">
                      {member.role}
                    </p>
                    <h4 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-white">
                      {member.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {member.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
