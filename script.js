document.addEventListener('DOMContentLoaded', function() {
    const bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

    // Function to remove articles ('a', 'an', 'the') and sort the band names
    function sortBandNames(names) {
        return names
            .map(name => name.replace(/^(a|an|the) /i, '').trim()) // Remove articles
            .sort(); // Sort alphabetically
    }

    // Get the sorted band names
    const sortedNames = sortBandNames(bandNames);

    // Get the ul element to display the sorted names
    const ul = document.getElementById('band');

    // Create and append li elements to the ul
    sortedNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    });
});
