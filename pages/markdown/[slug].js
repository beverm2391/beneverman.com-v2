function RenderMarkdown({ markdown }) {
    return (
        <div>Hi</div>
    );
}

export async function getStaticPaths() {

    const fs = require('fs');
    const path = require('path');
    
    const markdownFiles = fs.readdirSync(path.join(__dirname, '../../markdown'));

    return {
        props: {}
    }
}

export default RenderMarkdown;