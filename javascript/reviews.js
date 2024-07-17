function handleReviewSubmit() {
    
    var reviewSendDone = document.getElementById('reviewSendDone');
    reviewSendDone.classList.add('show');
    reviewSendDone.classList.remove('hide');

    
    var reviewInput = document.querySelector('.review-input');
    reviewInput.value = '';
    var reviewInputName = document.querySelector('.review-input-name');
    reviewInputName.value = '';

    
    setTimeout(function() {
        reviewSendDone.classList.add('hide');
        setTimeout(function() {
            reviewSendDone.classList.remove('show');
        }, 1000);
    }, 1000);
}