# secrets-replace

This action replaces values preceded by SECRET\_ in a given file. This is useful for replacing github secrets in an .env file.

## Inputs

### `file`

**Required** The .env (or other) file where some values begin with SECRET\_

##### Example .env file:
```
DB_PWD=SECRET_DB_PASSWORD
SAMPLE_KEY=SECRET_SAMPLE_KEY
```

### `secrets`

**Required** A JSON object containing the keys (without the SECRET\_ prefix) and values that should be replaced if found within the file.

##### Example json file:
```json
{
  "DB_PASSWORD": "12345SecurePassword!",
  "SAMPLE_KEY": "mySecretKey123abc"
}
```

## Example

```yaml
- name: Replace secrets in .env
  uses: codeurs/secrets-replace@v4
  with:
    file: "path/to/.env"
    secrets: ${{ toJson(secrets) }}
```
