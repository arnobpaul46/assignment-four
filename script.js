// empty arrays
let interviewlist = [];
let rejectlist = [];

let currentStatus = 'all';

// get counts
const allCount = document.getElementById("allCount");
const interviewCount = document.getElementById("interviewCount");
const rejectCount = document.getElementById("rejectCount");

// get buttons
const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectBtn = document.getElementById("rejectBtn");

// get cards and filter section
const allCard = document.getElementById("allCard");
const filterJob = document.getElementById('filterJob');
const emptyAllCard = document.getElementById('emptyAllCard');


const totalJobsSpan = document.getElementById('totalJobs');

function updateTotalJobs() {
    const totalCards = allCard.querySelectorAll('.card').length;
    totalJobsSpan.innerText = totalCards;
}

// calculate counts
function calculateCount() {
    allCount.innerText = allCard.querySelectorAll('.card').length;
    interviewCount.innerText = interviewlist.length;
    rejectCount.innerText = rejectlist.length;
    updateTotalJobs();
}
calculateCount();

// toggle button style
function toggleStyle(id) {
    for (const btn of [allBtn, interviewBtn, rejectBtn]) {
        btn.classList.remove('bg-[#3B82F6]', 'text-white', 'hover:bg-[#134fafc6]');
        btn.classList.add('bg-[#ffff]', 'text-gray-800', 'border-[#F1F2F4]', 'border-2');
    }

    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove('bg-[#ffff]', 'text-gray-800', 'border-[#F1F2F4]', 'border-2');
    selected.classList.add('bg-[#3B82F6]', 'text-white', 'hover:bg-[#134fafc6]');

    if (id === 'allBtn') {
        allCard.classList.remove('hidden');
        filterJob.classList.add('hidden');
    } else {
        allCard.classList.add('hidden');
        filterJob.classList.remove('hidden');
        if (id === 'interviewBtn') renderInter();
        else if (id === 'rejectBtn') renderReject();
    }
}

// handle clicks on buttons inside cards
document.body.addEventListener('click', function(e) {
    const card = e.target.closest('.card');
    if (!card) return;

    const jobName = card.querySelector('.jobName').innerText;
    const jobPosition = card.querySelector('.jobPosition').innerText;
    const jobType = card.querySelector('.jobType').innerText;
    const notes = card.querySelector('.notes').innerText;

    // INTERVIEW button
    if (e.target.classList.contains('interview-btn')) {
        card.querySelector('.status').innerText = 'Interview';
        if (!interviewlist.find(j => j.jobName === jobName)) {
            interviewlist.push({ jobName, jobPosition, jobType, status: 'Interview', notes });
        }
        rejectlist = rejectlist.filter(j => j.jobName !== jobName);

    // REJECT button
    } else if (e.target.classList.contains('reject-btn')) {
        card.querySelector('.status').innerText = 'Rejected';
        if (!rejectlist.find(j => j.jobName === jobName)) {
            rejectlist.push({ jobName, jobPosition, jobType, status: 'Rejected', notes });
        }
        interviewlist = interviewlist.filter(j => j.jobName !== jobName);

    // DELETE button
    } else if (e.target.classList.contains('fa-trash-can')) {
        card.remove();
        interviewlist = interviewlist.filter(j => j.jobName !== jobName);
        rejectlist = rejectlist.filter(j => j.jobName !== jobName);
    }

    calculateCount();

    if (currentStatus === 'interviewBtn') renderInter();
    else if (currentStatus === 'rejectBtn') renderReject();

    checkAllEmpty();
});

// render Interview page
function renderInter() {
    filterJob.innerHTML = '';
    if (interviewlist.length === 0) {
        filterJob.innerHTML = getNoJobsHTML();
        return;
    }
    for (const job of interviewlist) {
        const div = createJobCard(job);
        filterJob.appendChild(div);
    }

}

// render Reject page
function renderReject() {
    filterJob.innerHTML = '';
    if (rejectlist.length === 0) {
        filterJob.innerHTML = getNoJobsHTML();
        return;
    }
    for (const job of rejectlist) {
        const div = createJobCard(job);
        filterJob.appendChild(div);
    }
}

// create card element from job info
function createJobCard(job) {
    const div = document.createElement('div');
    div.className = 'card mt-3 p-3 bg-white rounded-xl border-2 border-[#F1F2F4] hover:border-blue-100';
    div.innerHTML = `
        <div class="flex items-center justify-between">
            <h2 class="jobName text-2xl font-semibold text-[#002C5C]">${job.jobName}</h2>
            <i class="fa-regular fa-trash-can"></i>
        </div>
        <p class="jobPosition text-[#64748B] text-lg">${job.jobPosition}</p>
        <p class="jobType text-[#64748B] text-sm py-2">${job.jobType}</p>
        <div class="mt-3">
            <p class="status bg-[#EEF4FF] inline px-3 py-2 rounded-lg">${job.status}</p>
            <p class="notes py-4">${job.notes}</p>
        </div>
        <div class="flex gap-4">
            <button class="interview-btn border-2 px-3 py-2 text-sm rounded-lg text-[#10B981] hover:bg-[#10B981] hover:text-white">INTERVIEW</button>
            <button class="reject-btn border-2 px-3 py-2 text-sm rounded-lg text-[#EF4444] hover:bg-[#EF4444] hover:text-white">REJECTED</button>
        </div>`;
    return div;
}

// no jobs HTML
function getNoJobsHTML() {
    return `<div class="card mt-3 p-5 bg-white rounded-xl border border-[#F1F2F4] flex flex-col items-center justify-center">
                <img src="./jobs.png" alt="No jobs" class="w-32 h-32">
                <h1 class="text-2xl text-[#002C5C] font-semibold mt-3">No jobs available</h1>
                <p class="text-[#64748B] text-lg">Check back soon for new job opportunities</p>
            </div>`;
}

// check if allCard empty
function checkAllEmpty() {
    if (allCard.querySelectorAll('.card').length === 0) {
        allCard.innerHTML=getNoJobsHTML()
    } else {
        emptyAllCard.classList.add('hidden');
    }
}