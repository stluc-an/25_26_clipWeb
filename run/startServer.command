SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd $SCRIPT_DIR/..

http-server -c-1 -S -C ./lib/SequencerJS/cert.pem -K ./lib/SequencerJS/key.pem

