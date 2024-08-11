function showForm(formId) {
    document.getElementById(formId).style.display = 'block';
}

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

function addPatient() {
    // Add patient data to the table
    closeForm('patientForm');
}

function addDoctor() {
    // Add doctor data to the table
    closeForm('doctorForm');
}

function addExam() {
    // Add exam data to the table
    closeForm('examForm');
}
