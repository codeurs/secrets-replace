# secrets-replace

This action replaces values preceded by SECRET\_ in a given file. This is useful for replacing github secrets in an .env file.

## Inputs

### `file`

**Required** The .env (or other) file where some values begin with SECRET\_

### `secrets`

**Required** A JSON object containing the keys (without the SECRET\_ prefix) and values that should be replaced if found within the file.

## Example

```yaml
- name: Replace secrets in .env
  uses: codeurs/secrets-replace
  with:
    file: 'path1/to/.env'
    secrets: ${{ toJson(secrets) }}
```
