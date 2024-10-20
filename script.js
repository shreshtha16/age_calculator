function calculateAge() {
    let birthdate = new Date(document.getElementById('birthdate').value);
    if (birthdate == 'Invalid Date') {
        document.getElementById('result').innerText = "Please enter a valid birthdate.";
        return;
    }

    let today = new Date();
    let ageYears = today.getFullYear() - birthdate.getFullYear();
    let ageMonths = today.getMonth() - birthdate.getMonth();
    let ageDays = today.getDate() - birthdate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('result').innerText = `You are ${ageYears} years old.`;
}
