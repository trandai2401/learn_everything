function formatNumber(num = 0) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default formatNumber;

export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0"); // Lấy ngày và đảm bảo đủ 2 chữ số
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Lấy tháng (phải +1 vì đếm từ 0) và đảm bảo đủ 2 chữ số
  const year = date.getFullYear(); // Lấy năm

  return `${day}/${month}/${year}`;
}

export function calculateTimeDifference(inputDate) {
  const inputTime = new Date(inputDate); // Chuyển đổi đầu vào thành đối tượng Date
  const currentTime = new Date(); // Thời điểm hiện tại

  const timeDiff = Math.abs(currentTime - inputTime); // Độ chênh lệch thời gian (tính theo mili giây)

  // Tính khoảng cách theo phút, giờ và ngày
  const minutes = Math.floor(timeDiff / (1000 * 60));
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // Xử lý việc hiển thị dựa trên khoảng cách
  if (minutes < 60) {
    return `${minutes} phút`;
  } else if (hours < 24) {
    return `${hours} giờ`;
  } else {
    return `${days} ngày`;
  }
}
