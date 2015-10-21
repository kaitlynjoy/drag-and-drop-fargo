<?php


if (isset($GLOBALS["HTTP_RAW_POST_DATA"]))
{
  // Get the data
  $imageData=$GLOBALS['HTTP_RAW_POST_DATA'];

  // Remove the headers (data:,) part.
  $filteredData=substr($imageData, strpos($imageData, ",")+1);

  // Need to decode before saving since the data we received is already base64 encoded
  $unencodedData=base64_decode($filteredData);

  //echo "unencodedData".$unencodedData;

  // Save file.
  $fileCount = count (glob ('submitted-images/*.png'));
  $fileName = 'submitted-images/' . ( $fileCount + 1) . '.png';
  $fp = fopen( $fileName , 'wb' );
  fwrite( $fp, $unencodedData);
  fclose( $fp );

}
?>
