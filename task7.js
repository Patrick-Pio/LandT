// ===================================
// Task 7: Skip or Stop Early
// ===================================
console.log("Task 7");

for (let patient of patients) {
    if (patient.age < 30) {
        continue; // Skip patients younger than 30
    }

    console.log(patient.name, "-", patient.age);
}
console.log();
