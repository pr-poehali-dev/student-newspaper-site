interface TeamMember {
  name: string;
  role?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    { name: "Богданов Алексей" },
    { name: "Соломатин Никита" },
    { name: "Игнатьева Ксения" },
    { name: "Ермакова Эллина" },
    { name: "Николайчук Дмитрий" },
  ];

  return (
    <section className="bg-newspaper-dark-surface text-newspaper-dark-text py-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-4 left-8 star-decoration star-top-left star-medium"></div>
      <div className="absolute top-4 right-8 star-decoration star-top-right star-medium"></div>

      <div className="container mx-auto px-4">
        <div className="text-center border-b border-newspaper-dark-border pb-4 mb-6 relative stripe-decoration stripe-horizontal">
          <h2 className="text-2xl font-bold font-serif tracking-wide">
            РЕДАКЦИЯ
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="py-2 relative star-decoration star-bottom-left star-small"
            >
              <p className="font-serif text-sm tracking-wide">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
