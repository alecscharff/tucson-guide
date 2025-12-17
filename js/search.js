// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchableCards = document.querySelectorAll('[data-searchable]');
    
    if (searchInput && searchableCards.length > 0) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            searchableCards.forEach(card => {
                const searchText = card.getAttribute('data-searchable').toLowerCase();
                
                if (searchText.includes(searchTerm) || searchTerm === '') {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show "no results" message if needed
            const visibleCards = Array.from(searchableCards).filter(card => card.style.display !== 'none');
            let noResultsMsg = document.querySelector('.no-results');
            
            if (visibleCards.length === 0 && searchTerm !== '') {
                if (!noResultsMsg) {
                    noResultsMsg = document.createElement('div');
                    noResultsMsg.className = 'no-results info-box info-box-warning';
                    noResultsMsg.textContent = 'No results found. Try a different search term.';
                    searchInput.parentElement.after(noResultsMsg);
                }
            } else if (noResultsMsg) {
                noResultsMsg.remove();
            }
        });
    }
});
