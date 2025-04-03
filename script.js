document.addEventListener("DOMContentLoaded", function() { /* รอให้หน้าเว็บโหลดเสร็จ */
    const occupation = document.querySelector(".occupation"); /* เลือกส่วนอาชีพ */
    occupation.addEventListener("click", function() { /* เมื่อคลิกที่อาชีพ */
        occupation.textContent = "คลิกเพื่อดูข้อมูลเพิ่มเติม!"; /* เปลี่ยนข้อความ */
        setTimeout(() => { /* รอ 2 วินาที */
            occupation.textContent = "[อาชีพของคุณ]"; /* เปลี่ยนกลับเป็นข้อความเดิม */
        }, 2000); /* 2000 มิลลิวินาที = 2 วินาที */
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const occupation = document.querySelector(".occupation");
    occupation.addEventListener("click", function() {
        occupation.textContent = "คลิกเพื่อดูข้อมูลเพิ่มเติม!";
        setTimeout(() => {
            occupation.textContent = "[อาชีพของคุณ]";
        }, 2000);
    });

    // สร้างจุดสีขาวเต็มพื้นหลัง
    const particleBackground = document.querySelector(".particle-background");
    const particleCount = 50; // จำนวนจุด (ปรับได้)
    const particles = [];

    // สร้างอนุภาค
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // ตั้งตำแหน่งเริ่มต้นแบบสุ่ม
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        particleBackground.appendChild(particle);
        particles.push(particle);
    }

    // ขยับอนุภาคตามเมาส์
    document.addEventListener("mousemove", function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;

            // คำนวณระยะห่างจากเมาส์
            const dx = mouseX - particleX;
            const dy = mouseY - particleY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // ขยับอนุภาคตามเมาส์ (ยิ่งใกล้ยิ่งขยับมาก)
            const moveFactor = Math.min(50 / distance, 1); // จำกัดการขยับ
            particle.style.transform = `translate(${dx * moveFactor * 0.1}px, ${dy * moveFactor * 0.1}px)`;
        });
    });
});