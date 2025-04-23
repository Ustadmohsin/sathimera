pipeline {
    environment {
        NODE_VERSION = '20.0.0' // Optional if using nvm or pre-installed Node
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
            echo '❌ Deployment failed!'
        }
    }
}
