const carrierPayload = {
    email: "aman+123@portpro.io",
}
if (true) {
    let emailParts = carrierPayload.email.split('@');
    let localPart = emailParts[0];

    // Check if there's already a '+number' in the local part
    let match = localPart.match(/\+(\d+)$/);

    if (match) {
        // Increment the existing number
        let number = parseInt(match[1]) + 1;
        localPart = localPart.replace(/\+(\d+)$/, `+${number}`);
    } else {
        // If no number exists, just add '+1'
        localPart += '+1';
    }

    carrierPayload.alternativeEmail = `${localPart}@${emailParts[1]}`;
}
console.log(carrierPayload)

