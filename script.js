function orderSuccess() {
    alert('สั่งซื้อสำเร็จ! ขอบคุณที่ใช้บริการค่ะ');
}
// Parallax effect for scrolling
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-bg');
    const scrollPosition = window.pageYOffset;
    
    // Adjust the speed of the parallax effect (you can change the value here)
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
