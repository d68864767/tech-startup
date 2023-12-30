// Array of team members
const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO',
        avatar: 'john.jpg',
        bio: 'John is a visionary with 20 years of experience in the tech industry.'
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        avatar: 'jane.jpg',
        bio: 'Jane is a tech genius who loves to innovate and solve complex problems.'
    },
    // Add more team members as needed
];

// Function to create team member element
function createTeamMemberElement(member) {
    const memberElement = document.createElement('div');
    memberElement.classList.add('team-member');

    const avatarElement = document.createElement('img');
    avatarElement.src = member.avatar;
    avatarElement.alt = member.name;
    memberElement.appendChild(avatarElement);

    const nameElement = document.createElement('h3');
    nameElement.textContent = member.name;
    memberElement.appendChild(nameElement);

    const roleElement = document.createElement('p');
    roleElement.textContent = member.role;
    memberElement.appendChild(roleElement);

    memberElement.addEventListener('mouseover', function() {
        const bioElement = document.createElement('p');
        bioElement.textContent = member.bio;
        memberElement.appendChild(bioElement);
    });

    memberElement.addEventListener('mouseout', function() {
        memberElement.removeChild(memberElement.lastChild);
    });

    return memberElement;
}

// Function to initialize team section
function initTeam() {
    const teamSection = document.getElementById('team');

    teamMembers.forEach(function(member) {
        const memberElement = createTeamMemberElement(member);
        teamSection.appendChild(memberElement);
    });
}

// Call the function to initialize team section
initTeam();
