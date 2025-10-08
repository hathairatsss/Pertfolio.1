// progress.js
window.onscroll = function() {
  // คำนวณตำแหน่งเลื่อน
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  // เปลี่ยนความกว้างของแถบ
  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    progressBar.style.width = scrolled + "%";
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('img.skill');
  skills.forEach(skill => {
    skill.classList.add('show'); // เพิ่ม class 'show' ให้ทุกรูป
  });
});

const skills = document.querySelectorAll('img.skill');

window.addEventListener('scroll', () => {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if(rect.top < window.innerHeight) {
      skill.classList.add('show');
    }
  });
});


// ฟังก์ชันสร้างหิมะ
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄"; // ใช้ Unicode หิมะ
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; // ความเร็ว
  snowflake.style.opacity = Math.random();

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

// สร้างหิมะเรื่อย ๆ
setInterval(createSnowflake, 200);
