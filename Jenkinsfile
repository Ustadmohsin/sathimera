pipeline {
    agent any

    // Connect to your GitHub repository
    stages {
        stage('Checkout') {
            steps {
                git(
                    url: 'https://github.com/Ustadmohsin/React_programs.git',
                    branch: 'main', // Replace with your branch name
                    credentialsId: 'your-github-credentials' // If private repo
                )
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Server') {
            steps {
                sh 'sudo cp -r dist/* /var/www/html/'
                sh 'sudo systemctl restart apache2'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
