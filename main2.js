   import { write, dir } from 'opfs-tools'

    async function initFiles() {
      await write('/opfs-tools/dir1/file1', 'file');
      await write('/opfs-tools/dir1/file2', 'file');
      await write('/opfs-tools/dir2/file1', 'file');
      await dir('/.Trash').create();
    }

    document.getElementById('add-test-file').addEventListener('click', async () => {
      await initFiles()
      tip()
    });
    document.getElementById('remove-test-file').addEventListener('click', async () => {
      await dir('/opfs-tools/').moveTo(dir('/.Trash'))
      tip()
    });

    const descEl = document.getElementById('desc')
    let timer
    function tip() {
      clearTimeout(timer)
      descEl.style.opacity = '1'
      timer = setTimeout(() => {
        descEl.style.opacity = '0'
      }, 2500)
    }
