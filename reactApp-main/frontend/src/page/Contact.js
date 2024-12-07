import React from "react";

const Contact = () => {
  const contacts = [
    { id: 1, name: "John Doe", phone: "123-456-7890", email: "john.doe@example.com", role: "Shop Owner" },
    { id: 2, name: "Jane Smith", phone: "987-654-3210", email: "jane.smith@example.com", role: "Employee" },
    { id: 3, name: "Mark Taylor", phone: "555-666-7777", email: "mark.taylor@example.com", role: "Employee" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#FFEB3B", // Yellow background
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "30px",
              width: "300px",
              height: "200px",
              textAlign: "center",
              backgroundColor: "#2196F3", // Blue background for cards
              color: "white", // White text for contrast
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2 style={{ margin: "10px 0", fontSize: "1.5rem" }}>{contact.name}</h2>
            <p style={{ margin: "5px 0", fontSize: "1.1rem" }}><strong>Phone:</strong> {contact.phone}</p>
            <p style={{ margin: "5px 0", fontSize: "1.1rem" }}><strong>Email:</strong> {contact.email}</p>
            <p style={{ margin: "5px 0", fontSize: "1.1rem" }}><strong>Role:</strong> {contact.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
