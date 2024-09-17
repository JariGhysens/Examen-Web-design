import axios from 'axios';

const baseURL = 'http://localhost:3000/';

// FilmController
export const getFilms = async () => {
  return await axios.get(`${baseURL}/films`);
};

export const getFilmById = async (id) => {
  return await axios.get(`${baseURL}/films/${id}`);
};

// GebruikerController
export const getGebruikers = async () => {
  return await axios.get(`${baseURL}/gebruiker`);
};

export const getGebruikerById = async (id) => {
  return await axios.get(`${baseURL}/gebruiker/${id}`);
};

export const registerGebruiker = async (gebruiker) => {
  return await axios.post(`${baseURL}/gebruiker/register`, gebruiker);

};
export const loginGebruiker = async (gebruiker) => {
  return await axios.post(`${"http://localhost:3000"}/gebruiker/login`, gebruiker);

};

// TicketController
export const getTickets = async () => {
  return await axios.get(`${baseURL}tickets`);
};

export const getTicketById = async (id) => {
  return await axios.get(`${baseURL}tickets/${id}`);
};

export const postTicket = async (ticket) => {
  return await axios.post(`${"http://localhost:3000"}/tickets`, ticket);
};

// VoorstellingController
export const getVoorstellingen = async () => {
  return await axios.get(`${baseURL}/voorstellingen`);
};

export const getVoorstellingById = async (id) => {
  return await axios.get(`${baseURL}/voorstellingen/${id}`);
};

// ZaalController
export const getZaals = async () => {
  return await axios.get(`${baseURL}/zaals`);
};

export const getZaalById = async (id) => {
  return await axios.get(`${baseURL}/zaals/${id}`);
};
