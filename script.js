const getImage = (imageSource) => {
  const listFilmsImg = document.createElement('img')
  listFilmsImg.classList.add('image-filme')
  listFilmsImg.src = imageSource;
  return listFilmsImg;
}

const getTitle = (title) => {
  const h3 = document.createElement('h3')
  h3.classList.add('movieTitle')
  h3.innerText = title;
  return h3;
}


const getRelease = (releaseDate) => {
  const p = document.createElement('p')
  p.classList.add('releaseDate')
  p.innerHTML = `<i class="far fa-calendar-minus"></i> ${releaseDate}`;
  return p;
}

const getProdutor = (produtor) => {
  const p = document.createElement('p')
  p.classList.add('releaseDate')
  p.innerHTML = `<i class="fas fa-user-secret"></i> ${produtor}`;
  return p;
}

const getDiretor = (director) => {
  const p = document.createElement('p')
  p.classList.add('releaseDate')
  p.innerHTML = `<i class="fas fa-user-secret"></i> ${director}`;
  return p;
}


const getdesc = (description) => {
  const p = document.createElement('p')
  p.classList.add('movieTitle')
  p.innerText = description;
  return p;
}

const infosCreate = (releaseDate, producer, director) => {
  const div = document.createElement('div');
  div.className = 'info-movie';
  div.appendChild(getRelease(releaseDate));
  div.appendChild(getProdutor(producer));
  div.appendChild(getRelease(director));
  return div
}

const createItemElement = ({image, title, description, releaseDate, producer, director}) => {
  const li = document.createElement('li');
  li.className = 'movie'
  li.appendChild(getImage(image));
  li.appendChild(getTitle(title));
  li.appendChild(getdesc(description));
  li.appendChild(infosCreate(releaseDate, producer, director));



  return li
}

const creatList = async () => {
  const ulFilms = document.querySelector('#films');
  const filmsList =  await fetchDataFilms();
  console.log(filmsList)

  filmsList.forEach(({title, image, description, release_date:releaseDate, producer, director}) => {
    ulFilms.appendChild(createItemElement({title, image, description, releaseDate,  producer, director}))
  });

  console.log(ulFilms)


}


window.onload = () => {
  creatList()
}