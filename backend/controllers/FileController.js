const controller = {
    storeFile: (req, res) => {
        const { filename } = req.file;

        FileService.storeFile(filename);

        return res.json({
            url: `http://localhost:3333/uploads/${filename}`
        });
    }
}

module.exports = controller;