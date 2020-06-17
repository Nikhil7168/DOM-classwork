// -----------TO DELETE MOVIE----------

// let btns = document.querySelectorAll('#movie-list .delete');

// btns.forEach( btn => {
//     btn.addEventListener('click', (e) => {

//         const li = e.target.parentElement;

//         li.parentNode.removeChild(li);
        
//     });
// })

// Event bubbling------\\\\\\\\

const list = document.querySelector('#movie-list ul');

list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        // li.parentNode.removeChild(li);
        list.removeChild(li);
    }
});

// -----------To add MOVIE------------

const addMovie = document.forms['add-movie'];//capturing form elements

addMovie.addEventListener('submit',(e) => {
    e.preventDefault(); // not refreshing
    const value = addMovie.querySelector("input[type='text']").value;

    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    movieName.textContent = value;
    deleteBtn.textContent = 'delete';

    // also add classes to elements--:::
    movieName.classList.add('name');
    deleteBtn.classList.add('delete');

    li.appendChild(movieName);
    li.appendChild(deleteBtn);

    list.appendChild(li);
});

// ---- TO HIDE LIST-------

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change' , () => {
    if(hideBox.checked){
        list.style.display = 'none'
    }else{
        list.style.display = 'inline'
    }
});

// SEARCH------

const searchMovies = document.forms['search-movies'];
searchMovies.addEventListener('keyup',(e) => {
    let movieList = document.querySelectorAll('#movie-list ul li');
    movieList.forEach( movie => {
        if(!movie.querySelector('.name').textContent.toLowerCase().includes(searchMovies.querySelector('input').value.toLowerCase())){
            movie.style.display = 'none';
        }else{
            movie.style.display = 'block';
        };
    });
});