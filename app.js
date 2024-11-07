function showPage(pageId) {
    const pages = document.querySelectorAll("section");
    pages.forEach(page => page.style.display = "none"); // ซ่อนทุกหน้า
    document.getElementById(pageId).style.display = "block"; // แสดงหน้าเฉพาะที่ต้องการ
}