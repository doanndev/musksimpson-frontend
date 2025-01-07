export function formatAddress(address: string | undefined) {
    if (address === undefined) return "";
    if (address.length <= 8) return address; // Nếu chuỗi ngắn hơn 8 ký tự, trả về chuỗi gốc
    return address.slice(0, 4) + "..." + address.slice(-6);
}