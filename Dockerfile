# Étape 1 : Construction de l'application Angular
FROM node:22.6.0-alpine as build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du code source dans le conteneur
COPY . .

# Construire l'application Angular pour la production
RUN npm run build 

# Étape 2 : Servir l'application avec Nginx
FROM nginx:stable

# Copier les fichiers construits depuis l'étape précédente dans le dossier Nginx
COPY --from=build /app/dist/student/browser /usr/share/nginx/html

# Exposer le port 80 pour l'accès HTTP
EXPOSE 80
