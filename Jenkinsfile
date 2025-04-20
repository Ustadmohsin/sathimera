pipeline {
    agent any

    environment {
        NODE_VERSION = '20.0.0' //     optional if you're using nvm or node is pre-installed
            }

    stages {
        stage('Building Code') {
            steps {
                script {
                    sh 'pwd'
                    sh 'npm i'
                    sh 'sudo npm run build'
                    sh 'sudo cp -r dist/* /var/www/html/'
                    sh 'sudo systemctl restart apache2'
                    }
                }
            }
        }

    post {
        success {
            echo '✅ Deployed successfully to Apache!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
