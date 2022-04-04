FROM cypress/browsers:node16.13.2-chrome97-ff96

ARG USER_ID=1001
ARG GROUP_ID=997


RUN groupadd -g ${GROUP_ID} appuser
RUN useradd -r --no-log-init -u ${USER_ID} -g appuser appuser
RUN install -d -m 0755 -o appuser -g appuser /home/appuser
ENV CYPRESS_CACHE_FOLDER=/home/appuser/.cache/Cypress
ENV YARN_CACHE_FOLDER=/home/appuser/.cache/yarn

WORKDIR /home/appuser/app

# dependencies will be installed only if the package files change
COPY package.json .

RUN yarn install

RUN yarn run cypress verify

USER appuser

RUN id
