import React from 'react';
import classNames from 'classnames';

import ContentBlock from 'app/components/ContentBlock';
import ExternalLink from 'app/components/ExternalLink';
import HeadingBlock from 'app/components/HeadingBlock';
import ChecklistItem from 'app/components/ChecklistItem';
import CopyButton from 'app/components/CopyButton';

import styles from './styles.module.scss';

function Documentation() {
  return (
    <ContentBlock>
      <HeadingBlock level="1" heading="Developer Documentation">
        <p>
          {'Documentation is also provided in the '}
          <ExternalLink href="https://github.com/chichiwang/tamsui">Github repository</ExternalLink>
          {' in the README file '}
          <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/docs/README.md">/docs/README.md</ExternalLink>
          .
        </p>
      </HeadingBlock>

      <HeadingBlock level="2" heading="Contents">
        <ul className={classNames(styles.list, styles.content)}>
          <li>
            <a href="#Starting-a-Project">Starting a Project</a>
          </li>
          <li>
            <a href="#NPM-Scripts">NPM Scripts</a>
          </li>
          <li>
            <a href="#Developing-Locally">Developing Locally</a>
          </li>
        </ul>
      </HeadingBlock>

      <HeadingBlock level="2" id="Starting-a-Project" heading="Starting a Project">
        <ChecklistItem>
          {'Clone the '}
          <ExternalLink href="https://github.com/chichiwang/tamsui">repository</ExternalLink>
          .
        </ChecklistItem>
        <ChecklistItem>Rename the project directory.</ChecklistItem>

        <ChecklistItem>
          {'Update the '}
          <span className={styles.highlight}>package.json</span>
          {' file.'}
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Update the '}
          <span className={styles.highlight}>name</span>
          {' field.'}
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Update the '}
          <span className={styles.highlight}>repository/url</span>
          {' field.'}
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Update the '}
          <span className={styles.highlight}>bugs/url</span>
          {' field.'}
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Update the '}
          <span className={styles.highlight}>homepage</span>
          {' field.'}
        </ChecklistItem>

        <ChecklistItem>
          <ExternalLink href="https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url">Reset the git remote</ExternalLink>
          {' to your new project repository.'}
        </ChecklistItem>

        <ChecklistItem>
          {'If using '}
          <ExternalLink href="https://github.com/nvm-sh/nvm">nvm</ExternalLink>
          {', run '}
          <span className={styles.highlight}>nvm use</span>
          .
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Otherwise, note the contents of '}
          <span className={styles.highlight}>.nvmrc</span>
          {' to see the version of '}
          <ExternalLink href="https://nodejs.org/">Node.js</ExternalLink>
          {' this project is built on.'}
        </ChecklistItem>

        <ChecklistItem>
          {'Run '}
          <span className={styles.highlight}>npm install</span>
          .
        </ChecklistItem>
      </HeadingBlock>

      <HeadingBlock className={styles.pageBreak} level="2" id="NPM-Scripts" heading="NPM Scripts">
        <table className={styles.scriptsList}>
          <thead>
            <tr>
              <th>Script</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>analyze</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run analyze" />
                </div>
              </td>
              <td>
                <p>
                  {'Run '}
                  <ExternalLink href="https://www.npmjs.com/package/webpack-bundle-analyzer">webpack-bundle-analyzer</ExternalLink>
                  {' against a '}
                  <span className={styles.highlight}>stats.json</span>
                  {' in the root directory'}
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>analyze:dev</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run analyze:dev" />
                </div>
              </td>
              <td>
                <p>
                  {'Build dev assets and run '}
                  <ExternalLink href="https://www.npmjs.com/package/webpack-bundle-analyzer">webpack-bundle-analyzer</ExternalLink>
                  {' against the generated asssets'}
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>analyze:prod</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run analyze:prod" />
                </div>
              </td>
              <td>
                <p>
                  {'Build prod assets and run '}
                  <ExternalLink href="https://www.npmjs.com/package/webpack-bundle-analyzer">webpack-bundle-analyzer</ExternalLink>
                  {' against the generated asssets'}
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>build:dev</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run build:dev" />
                </div>
              </td>
              <td>
                <p>
                  {'Build dev assets and generate '}
                  <span className={styles.highlight}>stats.json</span>
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>build:dist</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run build:dist" />
                </div>
              </td>
              <td>
                <p>
                  {'Create a '}
                  <span className={styles.highlight}>dist/</span>
                  {' directory in the project root'}
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>build:prod</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run build:prod" />
                </div>
              </td>
              <td>
                <p>
                  {'Build prod assets and generate '}
                  <span className={styles.highlight}>stats.json</span>
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>build:static</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run build:static" />
                </div>
              </td>
              <td>
                <p>
                  {'Copy the '}
                  <span className={styles.highlight}>static/</span>
                  {' directory ino the project root into '}
                  <span className={styles.highlight}>dist/</span>
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>clean</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run clean" />
                </div>
              </td>
              <td>
                <p>
                  {'Remove '}
                  <span className={styles.highlight}>stats.json</span>
                  {' and '}
                  <span className={styles.highlight}>dist/</span>
                  {' directory'}
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>dev</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run dev" />
                </div>
              </td>
              <td>
                <p>
                  {'Build dev assets and run the webserver, running server logs through '}
                  <ExternalLink href="https://github.com/pinojs/pino-pretty">pino-pretty</ExternalLink>
                  {' for development purposes'}
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>lint</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run lint" />
                </div>
              </td>
              <td>
                <p>
                  {'Run '}
                  <ExternalLink href="https://eslint.org/">ESLint</ExternalLink>
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>prod</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run prod" />
                </div>
              </td>
              <td>
                <p>
                  {'Build prod assets and run the webserver, running server logs through '}
                  <ExternalLink href="https://github.com/pinojs/pino-pretty">pino-pretty</ExternalLink>
                  {' for development purposes'}
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>run</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run run" />
                </div>
              </td>
              <td>
                <p>
                  {'Run '}
                  <span className={styles.highlight}>dist/index.js</span>
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>start</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm start" />
                </div>
              </td>
              <td>
                <p>
                  {`Build prod assets and run the webserver, 
                    intended to be used in production environments`}
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>test</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm test" />
                </div>
              </td>
              <td>
                <p>
                  {`Build prod assets and run the webserver, 
                    intended to be used in production environments`}
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>test:snapshot</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run test:snapshot" />
                </div>
              </td>
              <td>
                <p>
                  {'Update snapshots with '}
                  <ExternalLink href="https://github.com/pinojs/pino-pretty">Jest</ExternalLink>
                  {', can be used in lieu of '}
                  <span className={styles.highlight}>npm run test -- -u</span>
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.script}>
                  <span className={styles.highlight}>watch</span>
                  <CopyButton className={styles.copyButton} textToCopy="npm run watch" />
                </div>
              </td>
              <td>
                <p>
                  Run the watch server, will restart the server on every file change
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </HeadingBlock>

      <HeadingBlock level="2" id="Developing-Locally" heading="Developing Locally">
        <ul className={classNames(styles.list, styles.content)}>
          <li>
            <a href="#Running-the-Application">Running the Application</a>
          </li>
          <li>
            <a href="#Project-Directories">Project Directories</a>
          </li>
        </ul>
      </HeadingBlock>

      <HeadingBlock level="3" id="Running-the-Application" heading="Running the Application">
        <p>
          {'Run '}
          <span className={styles.highlight}>npm run watch</span>
          {' to run the development watch server.'}
        </p>
        <p>
          <span className={styles.highlight}>npm run dev</span>
          {' will build and run the application in development mode. '}
          <span className={styles.highlight}>npm run prod</span>
          {` will build and run the application in production mode. All of the above modes
           will run the server output through `}
          <ExternalLink href="https://github.com/pinojs/pino-pretty">pino-pretty</ExternalLink>
          .
        </p>
      </HeadingBlock>

      <HeadingBlock level="3" id="Project-Directories" heading="Project Directories">
        <p>
          {'The '}
          <span className={styles.highlight}>client/</span>
          {` directory is intended to house files specific to the client-side bundle.
           At the moment it only contains the entrypoint file, which `}
          <ExternalLink href="https://react.dev/reference/react-dom/client/hydrateRoot">
            mounts and hydrates the root application
          </ExternalLink>
          .
        </p>
        <p>
          {'The '}
          <span className={styles.highlight}>app/</span>
          {` directory houses application-level concerns: the root application contains the
           the html root, head, and body. The routes are housed in `}
          <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/dataRoutes">
            app/dataRoutes
          </ExternalLink>
          {' as a '}
          <ExternalLink href="https://reactrouter.com/en/main/route/route">
            data routes object
          </ExternalLink>
          {'. The reason the routes are not declared in '}
          <ExternalLink href="https://react.dev/learn/writing-markup-with-jsx">
            JSX
          </ExternalLink>
          {' is for compatibility with rendering '}
          <ExternalLink href="https://react.dev/reference/react-dom/server/renderToPipeableStream">
            React to a Node.js stream
          </ExternalLink>
          .
        </p>
        <p>
          {'The '}
          <span className={styles.highlight}>pages/</span>
          {` directory houses the page-level react components. These are plugged into the
           application via the `}
          <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/dataRoutes">
            dataRoutes object
          </ExternalLink>
          .
        </p>
        <p>
          {'The '}
          <span className={styles.highlight}>server/</span>
          {` directory houses the server-side rendering logic and defines the static asset
           directories. `}
          <ExternalLink href="https://getpino.io/">
            Pino
          </ExternalLink>
          {' is implemented as the logger.'}
        </p>
      </HeadingBlock>
    </ContentBlock>
  );
}

export default Documentation;
