import React from 'react';

const testimonials = [
    { name: "Lyes", username: "@lyker_zi", feedback: "There is an easier option. Deploying literally anything on @Railway" },
    { name: "Benjamin Klieger", username: "@BenjaminKlieger", feedback: '"Ship your apps, databases, and more to production in seconds." @Railway is a breeze to deploy.' },
    { name: "kinsyu", username: "@kinsyudev", feedback: "Addicted to organizing my services in @Railway" },
    { name: "Sam Newby", username: "@SamNewby_", feedback: "The UX in deploying a new app on @Railway is probably the best I’ve ever used." },
    { name: "Wilson Wilson", username: "@euboid", feedback: "@Railway has the best support among every PaaS I’ve tried. < 1 minute responses. Every. Single. Time." },
    { name: "teo", username: "@teodor_io", feedback: "Railway is really good. Incredible developer experience." },
    { name: "Kyle McDonald", username: "@kpmdev", feedback: "Damn, @Railway is by far the fastest I’ve ever got up and running on a host." },
    { name: "caeser_kv", username: "@caesar_kv", feedback: "@Railway for postgres, railway for everything ❤️" },
];

const Testimonials = () => {
    return (
        <section style={{ padding: "2rem", backgroundColor: "#111", color: "#fff" }}>
            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>What People Are Saying</h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1rem",
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "#222",
                            padding: "1.5rem",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <p style={{ fontStyle: "italic" }}>{testimonial.feedback}</p>
                        <footer style={{ fontWeight: "bold", marginTop: "1rem", textAlign: "right" }}>
                            - {testimonial.name} <span style={{ color: "#bbb" }}>{testimonial.username}</span>
                        </footer>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
